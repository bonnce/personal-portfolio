export function matrixCanvas(){

    const canvas = document.createElement('canvas')
    canvas.style.opacity = '.5'
    canvas.style.viewTransitionName = 'matrix'
    canvas.style.contain = 'paint'
    const ctx = canvas.getContext('2d')
    if(ctx){
        canvas.width = innerWidth
        canvas.height = innerHeight
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        
        const alphabet = katakana + latin + nums;
        
        const fontSize = 24;
        const columns = canvas.width/fontSize;
        
        let rainDrops = []
        
        for( let x = 0; x < columns; x++ ) {
            rainDrops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            for(let i = 0; i < rainDrops.length; i++)
            {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
                
                if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.90){
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };
        setInterval(draw, 30);
    }
    return canvas
}
const canvas = matrixCanvas()
document.body.append(canvas)