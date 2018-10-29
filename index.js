function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let array = document.querySelectorAll('ul.ranked-list')

  for (let i = 0; i < array.length; i++) {
    let this_child = array[i].children
    
    for (let j = 0; j < this_child.length; j++) {
      this_child[j].innerHTML = parseInt(this_child[j].innerHTML) + n
    }
  }
}

function deepestChild(n) {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
