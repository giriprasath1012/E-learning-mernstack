import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../Navbar'
function dsa()
{
    const [intro,setintro]=useState(false);
    function introset()
    {
        setintro(true);
    }
    const [stack,setstack]=useState(false);
    function stackqueue()
    {
        setstack(true);
    }
    const [llist,setllist]=useState(false);
    function linkedlist()
    {
        setllist(true);
    }
    const [tree,settree]=useState(false);
    function treeset()
    {
        settree(true);
    }
    const [graph,setgraph]=useState(false);
    function graphset()
    {
        setgraph(true);
    }

    const navigate=useNavigate();
    const navtoquiz=()=>
    {
        navigate('/courses/dsa/quiz')
    };

    const [one, setone] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://localhost:8000/courses/dsa')
        .then((response) => {
          setone(response.data);
        })
        .catch((error) => {
          console.error('Error fetching address data:', error);
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, []);
   
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                Data structures and Algorithms
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                {one.map((item, index) => (
              <div key={index}>{item.intro}</div>
            ))}
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={stackqueue}>Stack And Queue</h2>
                { stack ?
                (
                <div className="disptxt">
                    {one.map((item, index) => (
                    <div key={index}>{item.stack}</div>
                    ))}
                    <h1 className="text-2xl  text-blue-700">Stack</h1>
                    Definition: A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.
                    <br></br>
                    Operations:
                        <li>Push: Adding an element to the top of the stack.</li>
                        <li>Pop: Removing the top element from the stack.</li>
                        <li>Top: Viewing the top element without removing it.</li>
                    
                    <br></br>
                    <h1 className="text-2xl  text-blue-700">Queue</h1>
                    Definition: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed.
                    <br></br>
                    Operations:
                    <li>Enqueue: Adding an element to the back (rear) of the queue.</li>
                    <li>Dequeue: Removing the element from the front (head) of the queue.</li>
                    <li>Front: Viewing the front element without removing it.</li>
                    <li>Rear (or Back): Viewing the rear element without removing it.</li>
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={linkedlist}>Linked List</h2>
                { llist ?
                (
                <div className="disptxt">
                     {one.map((item, index) => (
                    <div key={index}>{item.linkedlist}</div>
                    ))}
                    <br></br>
                    <br></br>
                    Head: The head is a reference to the first node in the linked list. It allows you to access the list's elements by traversing from the head to subsequent nodes.
                    <br></br>
                    Node: A node is the fundamental building block of a linked list. It contains two fields:
                    <li>Data: The actual value or information stored in the node.</li>
                    <li>Next (Singly Linked List) or Previous (Doubly Linked List): A reference to the next node (in a singly linked list) or both the next and previous nodes (in a doubly linked list).</li>
                    
                    Tail (Doubly Linked List): In a doubly linked list, the tail is a reference to the last node in the list. It provides efficient access to both the beginning and end of the list.
                    <br></br>
                    Singly Linked List: In a singly linked list, each node has a reference to the next node. The last node's reference is typically null, indicating the end of the list.
                    <br></br>
                    Doubly Linked List: In a doubly linked list, each node has references to both the next and previous nodes. This allows for more efficient traversal in both directions.
                    <br></br>
                    Operations:

                    <li>Insertion: You can add a new node to the list, typically by updating the references of adjacent nodes.</li>
                    <li>Deletion: You can remove a node from the list by updating the references of adjacent nodes.</li>
                    <li>Traversal: You can traverse the list to access or modify the data in each node.</li>
                    <li>Search: You can search for a specific value within the list by traversing the nodes.</li>
                    <li>Modification: You can modify the data within a node by directly accessing it.</li>
               
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={treeset}>Trees</h2>
                { tree ?
                (
                <div className="disptxt">
                    {one.map((item, index) => (
                    <div key={index}>{item.tree}</div>
                    ))}
                    <br></br>
                    <li>Root: The root is the topmost node of the tree, from which all other nodes descend. It serves as the starting point for traversing the tree.</li>
                    <li>Parent: A node in a tree can have child nodes. The node from which a particular node descends is called its parent node.</li>
                    <li>Child: Nodes that descend from a parent node are called child nodes. A parent can have multiple children.</li>
                    <li>Sibling: Nodes that share the same parent are called siblings. They are at the same level in the tree.</li>
                    <li>Leaf: A leaf node is a node that has no children. It is the end of a branch in the tree.</li>
                    <li>Depth: The depth of a node in a tree is the length of the path from the root to that node. The root node has a depth of 0.</li>
                    <li>Height: The height of a tree is the length of the longest path from the root to a leaf node. It represents the depth of the deepest leaf node in the tree.</li>
                    <li>Subtree: A subtree is a tree formed by selecting a node and all of its descendants. Every node in a tree is the root of its own subtree.</li>
                    <li>Binary Tree: A binary tree is a tree in which each node has at most two children, referred to as the left child and the right child.</li>
                    <li>Binary Search Tree (BST): A binary search tree is a binary tree with the property that the value of each node is greater than or equal to all values in its left subtree and less than or equal to all values in its right subtree. BSTs are often used for efficient searching and sorting.</li>
                    <li> Balanced Tree: A balanced tree is a tree in which the height of the left and right subtrees of any node differ by at most one. Common types of balanced trees include AVL trees and Red-Black trees.</li>
                    <li>Tree Traversal: Tree traversal refers to the process of visiting and processing all the nodes in a tree in a specific order. Common traversal methods include in-order, pre-order, and post-order traversal.</li>
                    <li>Applications: Trees are used in various applications, including:

                        <li># Representing hierarchical data (e.g., file systems)</li>
                        <li># Implementing data structures like binary search trees and heaps</li>
                        <li># Parsing expressions (e.g., syntax trees)</li>
                        <li># Decision tree algorithms in machine learning</li>
                    </li>
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={graphset}>Graphs</h2>
                { graph ?
                (
                <div className="disptxt">
                    {one.map((item, index) => (
                    <div key={index}>{item.graph}</div>
                    ))}
                    <br></br>
                    <li>Node (Vertex): A node, also known as a vertex, represents an entity or an element in the graph. Nodes can have labels or values associated with them.</li>
                    <li>Edge: An edge is a connection between two nodes in the graph. Edges can be directed (have a specific direction) or undirected (bi-directional).</li>
                    <li>Directed Graph (Digraph): In a directed graph, each edge has a direction, indicating a one-way relationship between nodes. It consists of a set of nodes and a set of directed edges.</li>
                    <li>Undirected Graph: In an undirected graph, edges have no direction, meaning the relationship between nodes is mutual. If there is an edge between nodes A and B, you can traverse it in both directions.</li>
                    <li>Weighted Graph: In a weighted graph, each edge has a weight or cost associated with it. These weights can represent various things, such as distances, costs, or any other relevant metric.</li>
                    <li>Degree of a Node: The degree of a node is the number of edges connected to it. In directed graphs, there are two types of degrees: in-degree (number of incoming edges) and out-degree (number of outgoing edges).</li>
                    <li>Path: A path in a graph is a sequence of nodes where each consecutive pair of nodes is connected by an edge. The length of a path is the number of edges it contains.</li>
                    <li>Cycle: A cycle in a graph is a path that starts and ends at the same node. Cycles can exist in both directed and undirected graphs.</li>
                    <li>Connected Graph: A graph is considered connected if there is a path between any pair of nodes. In other words, there are no isolated nodes or disconnected components.</li>
                    <li>Disconnected Graph: A disconnected graph consists of two or more connected components, where there is no path between nodes in different components.</li>
                    <li>Acyclic Graph: A graph is acyclic if it does not contain any cycles. Directed acyclic graphs (DAGs) are often used in various applications, including scheduling and dependency management.</li>
                    <li>Tree: A tree is a special type of graph that is connected and acyclic. It has a hierarchical structure with a single root node from which all other nodes are reachable.</li>
                    <li>Graph Traversal: Traversing a graph means visiting all the nodes and edges in a systematic manner. Common graph traversal algorithms include Depth-First Search (DFS) and Breadth-First Search (BFS).</li>
                    <li>Applications: Graphs are used in a wide range of applications, including:</li>
                    <p>#  Social networks (modeling friendships)</p>
                    <p>#  Transportation networks (road maps, flight routes)</p>
                    <p>#  Web page ranking algorithms (PageRank)</p>
                    <p>#  Game AI (pathfinding)</p>


                </div>
        
                ):
                (
                    <div></div>
                )}
            </div>
            <div className="dispbtn">
                <button className="btn" onClick={navtoquiz}>Take a Test</button>
            </div>
        </div>
        </>

    );
}

export default dsa;