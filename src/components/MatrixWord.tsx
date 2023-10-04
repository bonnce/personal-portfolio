import { useEffect, useState } from 'preact/hooks';
import { ALPHABET } from '../utils/constants';
interface Props {
	word: string;
    letterTime:number;
    animationTime:number;
}

export const MatrixWord =(props: Props) =>{

    const { word, letterTime, animationTime } = props;
    const [indexLetter, setIndexLetter] = useState(0)
    const [letterLoop, setLetterLoop] = useState(0)
    const [currentLetter, setCurLetter] = useState('')
    const currentWord = indexLetter >= word.length -1 ? word : word.substring(0,indexLetter)
    
    useEffect(()=>{
        const animation = setInterval(()=>{
            setCurLetter(ALPHABET[Math.floor(Math.random()*ALPHABET.length)])
            if(letterLoop > letterTime){
                setIndexLetter(index => index +1)
                setLetterLoop(0)
            }
            setLetterLoop(letter=> letter +1)
        },animationTime)

        if(indexLetter >= word.length -1){
            setCurLetter('')
            clearInterval(animation)
        }
        return ()=> {clearInterval(animation)}
    },[indexLetter, letterLoop])

    return (
    <h1 class='text-green-500 text-7xl uppercase drop-shadow-neon text-center'>{currentWord}<span class='text-teal-200'>{currentLetter}</span></h1>)
}