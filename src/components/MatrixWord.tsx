import { useEffect, useState } from 'preact/hooks';
interface Props {
	word: string;
    letterTime:number;
    animationTime:number;
}

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alpha = katakana + latin + nums;

export const MatrixWord =(props: Props) =>{

    const { word, letterTime, animationTime } = props;
    const [currentWord, setCurrentWord] = useState('')
    const [indexLetter, setIndexLetter] = useState(0)
    const [letterLoop, setLetterLoop] = useState(0)
    const [currentLetter, setCurLetter] = useState('')
    
    useEffect(()=>{
        const animation = setInterval(()=>{
            setCurLetter(alpha[Math.floor(Math.random()*alpha.length)])
            if(letterLoop > letterTime){
                setIndexLetter(index => index +1)
                setLetterLoop(0)
            }
            setLetterLoop(letter=> letter +1)
        },animationTime)

        if(indexLetter >= word.length -1){
            clearInterval(animation)
        }
        return ()=> {clearInterval(animation)}
    },[indexLetter, letterLoop])

    useEffect(()=>{
        setCurrentWord(word.substring(0,indexLetter))
        if(indexLetter >= word.length -1){
            setCurrentWord(word)
            setCurLetter('')
        }
    },[indexLetter])

    return (
    <h3 class='text-[#3f3] text-5xl'>{currentWord}<span class='text-[#3fa]'>{currentLetter}</span></h3>)
}