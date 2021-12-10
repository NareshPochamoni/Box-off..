/* eslint-disable react/function-component-definition */
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/apiGet';

const Home = () => {

    const [input,setInput]=useState('');
    const [results,setResults]=useState(null);
    const [searchOption,setSearchOption]=useState('shows');

    const isSearchShow= searchOption==='shows'

    const onInputChange=(ev)=>{
        setInput(ev.target.value);
    }
    const onSearch=()=>{

        apiGet(`/search/${searchOption}?q=${input}`).then(result=>{
            setResults(result);

        
        });
    }

    const onKeyDown=(ev)=>{
        if(ev.keyCode===13)
        {
            onSearch();
        }
        }

    const renderResults=()=>{
        if(results && results.length===0)
        {
            return <div>No Results</div>
        }
        if(results && results.length>0)
        {
            return results[0].show ? <div> {results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>:
            <div> {results.map((item)=><div key={item.person.id}>{item.person.name}</div>)}</div>
        }
        return null;

    }
    const onRadioChange=(ev)=>{
        setSearchOption(ev.target.value);

    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} placeholder='search for something'/>

            <div> 
            <label htmlFor='show-search'>
                <input type="radio" value="shows" onChange={onRadioChange} checked={isSearchShow}/>
                Shows
            </label>
            <label htmlFor='actor-search'>
                <input type="radio" value="people" onChange={onRadioChange}  checked={!isSearchShow}/>
                Actors
            </label>
            </div>

            <button type="button" onClick={onSearch}  >Search</button>
            {renderResults()}
        </MainPageLayout>
    )
}

export default Home;
