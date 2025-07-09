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
        }
    }
}