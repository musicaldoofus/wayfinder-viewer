let nodeMap = [];
const getMaxNodes = (node) => {
  const countUp = (nextNode, counter = 0) => {
    if (nextNode.type === 'result') {
      nodeMap.push({
        index: nextNode.index
      });
      return counter;
    }
    else return Math.max(
      ...nextNode.components.buttonList
        .map(buttonObj => countUp(config.slides[buttonObj.toIndex], counter + 1))
      );
  }
  return countUp(node);
}

export default getMaxNodes;