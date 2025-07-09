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
                if(this.DNA[i]===inobj[i]){
                    count++;
                }
            }
            console.log(`specimen 1 and specimen 2 have ${(count/inobj.length)*100}% in common`)
        }
    }
    return DNA;
}