function Hello(){
    // here you can define variables or methods as you do in the javascript , and {} are used to access them (do u remember we have used the same {} using inside the `` in javascript(Here in jsx,no need of ``-->remember this point))

    let Errortype = ()=>{
        return 'Name Error'
    };
    let number = 343;




    return <p>Message No. {number} <br /> Its a Error :     {Errortype()}</p>
}

export default Hello;