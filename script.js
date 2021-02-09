india=document.getElementById('india')
us=document.getElementById('us')
japan=document.getElementById('japan')
brazil=document.getElementById('brazil')
bulgaria=document.getElementById('bulgaria')


async function getCurrencies(){
    var res=await fetch("https://api.exchangeratesapi.io/latest")
    var data=await res.json()
    console.log(data.rates)
    rs=data.rates.INR
    doll=data.rates.USD
    jp=data.rates.JPY
    bul=data.rates.BGN
    br=data.rates.BRL
   
    rsToOther()
    dollToOther()
    jpToOther()
    bulToOther()
    brazToOther()
}

getCurrencies()

function rsToOther(){

    inputRs=document.getElementById('india').value
    dollor=inputRs*(doll/rs)
    japnies=inputRs*(jp/rs)
    bulgarian=inputRs*(bul/rs)
    brazilian=inputRs*(br/rs)
    
    document.getElementById('us').value=dollor
    japan.value=japnies
    brazil.value=brazilian
    bulgaria.value=bulgarian
   
}

function dollToOther(){

    inputDoll=document.getElementById('us').value
    indian=inputDoll*(rs/doll)
    japnies=inputDoll*(jp/doll)
    bulgarian=inputDoll*(bul/doll)
    brazilian=inputDoll*(br/doll)
   

    india.value=indian
japan.value=japnies
    bulgaria.value=bulgarian
    brazil.value=brazilian
    
  
}

function jpToOther(){
inputJp=japan.value;

dollor=inputJp*(doll/jp)
indian=inputJp*(rs/jp)
bulgarian=inputJp*(bul/jp)
brazilian=inputJp*(br/jp)

india.value=indian
us.value=dollor
brazil.value=brazilian
    bulgaria.value=bulgarian
}

function bulToOther()
{
    inputBul=bulgaria.value

    dollor=inputBul*(doll/bul)
    japnies=inputBul*(jp/bul)
    indian=inputBul*(rs/bul)
    brazilian=inputBul*(br/bul)

    india.value=indian
us.value=dollor
brazil.value=brazilian
    japan.value=japnies
}

function brazToOther(){
inputBr=brazil.value

dollor=inputBr*(doll/br)
    japnies=inputBr*(jp/br)
    bulgarian=inputBr*(bul/br)
    indian=inputBr*(rs/br)

    india.value=indian
us.value=dollor
japan.value=japnies
    bulgaria.value=bulgarian
}


