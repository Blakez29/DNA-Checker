// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(num, arr){
    return {
      speciemnNum: num,
      dna: arr,
      mutate(){
        let base = ['A', 'T', 'C', 'G'];
        let x = Math.floor(Math.random() * 15);
        let y = Math.floor(Math.random() * 4);
        if(arr[x] === base[y]){
          mutate();
          return;
        }else{
          arr[x] = base[y];
        }
        return arr;
      },
      compareDNA(obj){
        let x = 0;
        console.log(arr.length);
        console.log(obj.length);
        for (let i = 0; i< arr.length; i++){
          if (arr[i] === obj[i]){
            x++;
          }
        }
        console.log(`specimen #1 and specimen #2 have ${((x/15)*100).toFixed(0)}% DNA in common`)
      },
      willLikelySurvive(){
        let x = 0;
        for (let i = 0; i < arr.length; i++){
          if(arr[i] === 'C' || arr[i] === 'G'){
            x++
          }};
          let p = (x/15) * 100;
          if(p >= 60){
            return true;
          }else{
            return false;
          }
        }
      }
    }
  
  function createPAequor(num){
    let list = [];
    x=1;
    while(list.length < num){
      const dna = pAequorFactory(x, mockUpStrand())
      if(dna.willLikelySurvive()){
      list.push(dna.dna);
      console.log(`${x}: ${dna.dna}`)
      x++;
      }
    }
    return list;
  }
  const dna1 = pAequorFactory(1, mockUpStrand());
  const dna2 = pAequorFactory(2, mockUpStrand());
  createPAequor(30);