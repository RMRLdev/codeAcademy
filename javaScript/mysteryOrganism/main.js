// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
function pAequorFactory(id,bases){
    var DNA={

        mutate(bases) {
            let randomBase=Math.random()*(bases.length);
            let tempBase=bases[randomBase];
            let random=0;
            do{
                random=returnRandBase();
                if(random!==tempBase){
                    bases[randomBase]=random;
                }
            }while(random===tempBase);
            return bases;
        },
        compareDNA(inobj){
            let count=0;
            for(let i=0;i<inobj.length;i++){
                if(this.bases[i]===inobj[i]){
                    count++;
                }
            }
            console.log(`specimen 1 and specimen 2 have ${(count/inobj.length)*100}% in common`)
        },
        willLikelysurvive(){
            let countC=0;
            let dna=this.bases;
            for(let i=0;i<dna.length;i++){
                if(dna[i]==='C'||dna[i]==='G'){
                    countC++;
                }
            }
            if(countC/dna.length>0.6){
                return true;
            }else{return false;}
        }
    }
    return DNA;
}
let survied=[];
let counter=0;
let temp;
do{
    temp=pAequorFactory(counter,mockUpStrand());
    counter++;
    if(temp.willLikelysurvive()===true){
        survied.push(temp);
    }
}while(survied.length<31);