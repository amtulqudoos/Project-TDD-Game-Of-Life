
import{verifyNeighbours} from "./gameVerifier.js"

describe ("liveCell",()=> {
    it ("has 2 less than 2 live neighbours it dies", () =>{
        const result = verifyNeighbours("1")
        expect(result).toBe(false)
    })
    it ("has more than 3live neighbours it dies", () =>{
        const result = verifyNeighbours("4")
        expect(result).toBe(false)
    })
    it("has 2 or 3 live neighbours live on next generation", () =>{
        const result = verifyNeighbours("2"|| "3")
        expect(result).toBe(true)
    })
    it("has 3 live neighbours live from dead", () =>{
        const result = verifyNeighbours("3")
        expect(result).toBe(true)
    }) 

})



