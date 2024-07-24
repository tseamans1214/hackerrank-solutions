// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]
 
// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 function findOrder(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    // Build the graph
    for (const [course, pre] of prerequisites) {
        adjList[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];
    const order = [];

    // Find all nodes with in-degree 0
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const current = queue.shift();
        order.push(current);

        for (const neighbor of adjList[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if all courses are in the result
    if (order.length === numCourses) {
        return order;
    } else {
        return [];
    }
}


// My old failing code
// var findOrder = function(numCourses, prerequisites) {
//     if (prerequisites.length === 0) {
//         let classesTaken = [];
//         for (let i=0; i<numCourses; i++) {
//             classesTaken.push(i);
//         }
//         return classesTaken;
//     }
//     let takenCourses = [];
//     let courses = new Map();
//     // Make 2d array with all prequisties for each course
//     for (let i=0; i<prerequisites.length; i++) {
//         if (courses.has(prerequisites[i][0]) == false) {
//             courses.set(prerequisites[i][0], [prerequisites[i][1]]);
//         } else {
//             courses.get(prerequisites[i][0]).push(prerequisites[i][1]);
//         }
//     }
//     for (let i=0; i<prerequisites.length; i++) {
//         if (courses.has(prerequisites[i][1]) == false) {
//                 courses.set(prerequisites[i][1], []);
//                 console.log("hello");
//         }
//     }
//     // Sort it by number of prequistes needed
//     // Convert the map to an array of [key, value] pairs
//     const mapAsArray = Array.from(courses);

//     // Sort the array by keys
//     mapAsArray.sort((a, b) => {
//     const keyA = a[1].length;
//     const keyB = b[1].length;
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0;
//     });

//     // Convert the array back to a map
//     const sortedCourses = new Map(mapAsArray);
//     let lastClassTaken = 0;
//     console.log(sortedCourses);
//     // Loop through courses
//     sortedCourses.forEach (function(value, key) {
//         // If it doesn't have a prereq, add it to taken array
//         if (value.length == 0) {
//             takenCourses.push(key);
//             lastClassTaken = key;
//             numCourses--;
//         } else {// Else if it is in the taken array, take it
//             for (let i=0; i<value.length; i++) {
//                 if (takenCourses.includes(value[i]) == false) {
//                     return [];
//                 } 
//             }
//             takenCourses.push(key);
//             lastClassTaken = key;
//             numCourses--;
//         }

//     })
//     if (numCourses != 0 && takenCourses.length != 0) {
//         for (let i=0; i<numCourses; i++) {
//             takenCourses.push(lastClassTaken + i + 1);
//         }
//     }
    
//     return takenCourses
// };
