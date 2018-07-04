// types: array, string, stacks, BT, BST, LL, tries, graphs, heaps, DP, recursion, sorting, search
// source: leetcode, AE, ctci, bloomberg

class Question {
  constructor(learned, level = null, name, source = null, type = null) {
    this.name = name;
    this.learned = learned;
    this.level = level;
    this.source = source;
    this.type = type;
  }
}

class QuestionList {
  constructor() {
    this._questions = [];
  }

  //time: O(1) | space: O(1)
  add(learned, level, name, source, type) {
    this._questions.push(new Question(learned, level, name, source, type));
    return this;
  }

  //time: O(n) | space: O(n)
  generateRand(num, type, source) {
    let list = this._questions.filter(quest => quest.learned);
    if (type !== undefined && type !== "all") {
      list = list.filter(quest => quest.type === type);
    }
    if (source !== undefined) {
      list = list.filter(quest => quest.source === source);
    }
    let max = list.length;
    let hwQuestions = [];
    if (max > 0) {
      for (let i = 0; i < Math.min(num, max); i++) {
        let questionNum = Math.floor(Math.random() * max);
        hwQuestions.push(list[questionNum]);
      }
    } else {
      return console.log(`No questions by these criteria: ${type} ${source}`);
    }

    let date = this.dateToday();
    console.log(`**************** Homework for ${date} ****************`);
    console.log(hwQuestions);
  }

  dateToday() {
    return new Date().toDateString();
  }
}

let homeworkTonight = new QuestionList()
  .add(true, "easy", "Two Number Sum", "AE", "array")
  .add(true, "easy", "Find Closest Value in BST", "AE", "BST")
  .add(true, "easy", "Depth First Search", "AE", "graphs")
  // .add(false, "easy", "Nth Fib", "AE", "recursion") //started but didnt fully understand
  .add(true, "easy", "Binary Search", "AE", "search")
  .add(true, "easy", "Find 3 Largest Num Sum", "AE", "search")
  .add(true, "easy", "Bubble Sort", "AE", "sorting")
  .add(true, "easy", "Insert Sort", "AE", "sorting")
  .add(true, "easy", "Selection Sort", "AE", "sorting")
  .add(true, "easy", "Palindrome Check", "AE", "string")
  .add(true, "easy", "Caesar Cipher Encryptor", "AE", "string")
  .add(true, "medium", "Three Number Sum", "AE", "array")
  .add(true, "medium", "Smallest Difference", "AE", "array")
  .add(true, "medium", "BST Construction", "AE", "BST")
  .add(true, "medium", "Validate BST", "AE", "BST")
  .add(true, "medium", "BST Traversal", "AE", "BST")
  .add(true, "medium", "Invert Binary Tree", "AE", "BT") //like BFS of BST
  // .add(false, "medium", "Max Subset Sum No Adjacent", "AE", "DP")
  .add(true, "medium", "Number of Ways to Make Change", "AE", "DP")
  // .add(false, "medium", "Min Number of Coins", "AE", "DP")
  // .add(false, "medium", "Levenshtein Distance", "AE", "DP")
  .add(true, "medium", "Kadanes Algo - Max Sum", "AE")
  // .add(false, "medium", "Breath-First Search", "AE", "graphs")
  // .add(false, "medium", "River Sizes", "AE", "graphs")
  // .add(false, "medium", "Min Heap Construction", "AE", "heaps") //started but didnt fully understand
  .add(true, "medium", "Remove kth Node from End", "AE", "LL")
  .add(true, "medium", "Permutations", "AE", "recursion")
  // .add(false, "medium", "Powerset", "AE", "recursion")
  // .add(false, "medium", "Search in Sorted Matrix", "AE", "search")
  .add(true, "medium", "Balanced Brackets", "AE", "stacks")
  // .add(false, "medium", "Longest Palindrome SubString", "AE", "string")
  // .add(false, "medium", "Suffix Trie Construction", "AE", "tries")
  .add(true, "hard", "Water Area / Trap Rain", "AE", "DP")
  .add(true, "hard", "Find loop", "AE", "LL");

//Bloomberg popular questions
homeworkTonight
  .add(true, "", "add nums of 2 linked list", "bloomberg", "LL")
  .add(true, "", "reverseLinkedList", "bloomberg", "LL")
  .add(true, "", "reverse integer", "bloomberg", "")
  .add(true, "", "most traded", "bloomberg", "")
  .add(true, "", "first unique character in a string", "bloomberg", "string")
  .add(true, "", "linked list cycle", "bloomberg", "LL")
  .add(true, "", "valid parentheses", "bloomberg", "") //same as AE balanced brackets
  .add(true, "", "trap rain water", "bloomberg", "") //same as AE water area
  .add(true, "", "string compression", "bloomberg", "string")
  .add(true, "", "move zeros", "bloomberg", "array")
  .add(true, "", "intersection of two linked lists", "bloomberg", "LL")
  .add(true, "", "validate BST", "bloomberg", "BST")
  .add(true, "", "min stack", "bloomberg", "stack");

//ctci
homeworkTonight.add();

let tricks = new QuestionList()
  .add(true, "", "binary search")
  .add(true, "", "shift array up by 1")
  .add(true, "", "swap arr spaces")
  .add(true, "", "insertion sort")
  .add(true, "", "selection sort")
  .add(true, "", "bubble sort")
  .add(true, "", "add nums by array back to front ")
  .add(true, "", "delete linked list pointer")
  .add(true, "", "reverse linked list")
  .add(true, "", "return fn that excutes callbacks on input")
  .add(true, "", "memo calculation")
  .add(true, "", "shift up nums + add val at specific idx");

module.exports = {
  homeworkTonight,
  tricks
};
