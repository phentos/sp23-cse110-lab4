function a(p,d) {
    const dd = [];
    const l = p.length;

    for (let i = 0; i < l; i++){
        const dp = p[i]*(1-d);
        
        dd.push(dp);
    }
    
    // console.log(i);
    // console.log(l);



    return dd;
}

