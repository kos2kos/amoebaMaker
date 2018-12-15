function amoebaMaker(title, parent=""){
  return {name: title, children: [],  parent: ""}
}

let bob = amoebaMaker("Bob Beltcher")

function addChild (amoeba, parentName, childName){
  if (amoeba.name === parentName){
    amoeba.children = [...amoeba.children, amoebaMaker(childName, parentName)]
  } else {
    for (child in amoeba.children){
      addChild(amoeba.children[child], parentName)
    }
  }
}

function findParent (amoeba, parentName) {
  console.log(amoeba.name)
  let boom = "jkb"
  if (amoeba.name == parentName){
    amoeba.name = "WINNER WINNER CHICKEN DINNER"
  } else {
    for(child in amoeba.children){
      console.log("~~Name Comparison~~")
      console.log(amoeba.children[child].name, " and ", parentName)
      findParent(amoeba.children[child], parentName)
    }
  }
}

let gene = amoebaMaker("Gene Beltcher")
let lousie = amoebaMaker("Lousie Beltcher")
let tina = amoebaMaker("Tina Beltcher")
bob.children = [...bob.children, gene, lousie, tina]

gene.children = [...gene.children,amoebaMaker("Lil Gene and the Beet Boys")]

findParent(bob, "Gene Beltcher")
