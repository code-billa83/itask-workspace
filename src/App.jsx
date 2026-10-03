import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'; 
import { FaEdit, FaPlus, FaCheckCircle, FaRegCircle } from "react-icons/fa"; 
import { AiFillDelete } from "react-icons/ai"; 

function App() {
  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState([
    { id: '1', todo: 'Complete React Dashboard UI', isCompleted: false },
    { id: '2', todo: 'Fix Tailwind responsiveness bugs', isCompleted: true }
  ])
  const [showFinished, setshowFinished] = useState(true)

  const totalTodos = todos.length;
  const completedTodos = todos.filter(t => t.isCompleted).length;

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    if(todo.trim().length <= 3) return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("") 
  }

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
  }

  const handleCheckbox = (id) => {
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white font-sans antialiased">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        
        <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl shadow-indigo-950/50">
          

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                iTask Workspace
              </h1>
              <p className="text-slate-400 text-xs md:text-sm mt-1">Keep your day structured and productive.</p>
            </div>

            <div className="flex gap-3 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80 self-start md:self-auto">
              <div className="text-center px-2">
                <span className="block text-xs text-slate-400 font-medium">Total</span>
                <span className="text-sm font-bold text-indigo-400">{totalTodos}</span>
              </div>
              <div className="w-[1px] bg-slate-800"></div>
              <div className="text-center px-2">
                <span className="block text-xs text-slate-400 font-medium">Done</span>
                <span className="text-sm font-bold text-emerald-400">{completedTodos}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">Create New Task</label>
            <div className="flex gap-2 relative group">
              <input 
                onChange={handleChange} 
                value={todo} 
                type="text" 
                className="w-full rounded-2xl px-5 py-3 bg-slate-950/60 border border-slate-800 text-slate-200 placeholder-slate-500 shadow-inner focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" 
                placeholder="What needs to be done?" 
              />
              <button 
                onClick={handleAdd} 
                disabled={todo.trim().length <= 3} 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 font-bold text-sm text-white px-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center gap-2 shrink-0 select-none cursor-pointer disabled:cursor-not-allowed"
              >
                <FaPlus className="text-xs" />
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6 select-none border-b border-slate-800/60 pb-4">
            <button 
              onClick={() => setshowFinished(!showFinished)} 
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${showFinished ? 'bg-indigo-600' : 'bg-slate-800'}`}
            >
              <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${showFinished ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
            <span className="text-xs md:text-sm font-medium text-slate-300">Include completed tasks</span>
          </div>
          
          <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1 custom-scrollbar">
            {todos.filter(t => showFinished || !t.isCompleted).length === 0 && (
              <div className="py-8 text-slate-500 text-center font-medium text-sm">
                No active tasks found. Time to relax!
              </div>
            )}
            
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && (
                <div 
                  key={item.id} 
                  className={`flex justify-between items-center p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 transition-all hover:border-slate-700/60 gap-4 group ${item.isCompleted ? 'opacity-60' : ''}`}
                >
                  <div className="flex gap-4 items-center min-w-0 flex-1">

                    <button 
                      onClick={() => handleCheckbox(item.id)}
                      className="text-lg shrink-0 cursor-pointer text-slate-500 hover:text-indigo-400 transition-colors"
                    >
                      {item.isCompleted ? (
                        <FaCheckCircle className="text-emerald-400" />
                      ) : (
                        <FaRegCircle />
                      )}
                    </button>
                    
                    <div className={`${item.isCompleted ? "line-through text-slate-500" : "text-slate-200"} text-sm font-medium break-words overflow-hidden`}>
                      {item.todo}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 shrink-0 opacity-100 sm:opacity-40 group-hover:opacity-100 transition-opacity duration-200">
                    <button 
                      onClick={(e) => handleEdit(e, item.id)} 
                      className="p-2 text-xs font-bold text-slate-400 hover:text-indigo-400 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all active:scale-90 cursor-pointer"
                      title="Edit Task"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={(e) => handleDelete(e, item.id)} 
                      className="p-2 text-xs font-bold text-slate-400 hover:text-red-400 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all active:scale-90 cursor-pointer"
                      title="Delete Task"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </main>
    </div>
  )
}

export default App

