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
        id,
        bases,
        mutate() {
            let randomBase=Math.random()*(this.bases.length);
            let tempBase=this.bases[randomBase];
            let random=0;
            do{
                random=returnRandBase();
                if(random!==tempBase){
                    this.bases[randomBase]=random;
                }
            }while(random===tempBase);
            return this.bases;
        },
        compareDNA(inobj){
            let count=0;
            for(let i=0;i<this.bases.length;i++){
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
        },
        complementStrand(){
            let complement=[];
            let currentbase;
            let dna=this.bases;
            for (let i=0;i<dna.length;i++){
                currentbase=dna[i];
                switch(currentbase){
                    case 'A':
                        complement.push('T');
                        break;
                    case 'T':
                        complement.push('A');
                        break;
                    case 'C':
                        complement.push('G');
                        break;
                    case 'G':
                        complement.push('C');
                        break;
                }
            }
            return complement;
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
}while(survied.length<30);
//console.log(survied);