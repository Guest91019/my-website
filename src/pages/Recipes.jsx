export default function BasicRecipes() {
  return (
  <div className=" bg-amber-100">
    <div className="mb-8 p-4 bg-amber-800 rounded-lg shadow-md w-full max-w-md text-center">
            <img 
                src="/my-website/br.jpg" 
                alt="Fudgy Brownies" 
                className="w-full h-auto max-w-xs mx-auto mb-4 rounded-md" 
            />
            <h1 className="text-xl font-bold text-white">Fudgy Brownies</h1>
    </div>
    
    <div className="mb-8 p-4 bg-amber-800 rounded-lg shadow-md w-full max-w-md text-center">
            <img 
                src="/my-website/ck.jpg" 
                alt="Basic Butter Cookies" 
                className="w-full h-auto max-w-xs mx-auto mb-4 rounded-md" 
            />
            <h1 className="text-xl font-bold text-white">Basic Butter Cookies</h1>
    </div>

    <div className="mb-8 p-4 bg-amber-800 rounded-lg shadow-md w-full max-w-md text-center">
            <img 
                src="/my-website/mug.jpg" 
                alt="Vanilla Mug Cake" 
                className="w-full h-auto max-w-xs mx-auto mb-4 rounded-md" 
            />
            <h1 className="text-xl font-bold text-white">Vanilla Mug Cake</h1>
        </div>
  </div>
  )
}
