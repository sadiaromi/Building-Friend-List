// ============================================Q#1 =============================================

// ========================================== STEP# 1 ===============================
const people={
    friends:[] as
    {
        firstName:string;
        lastName:string;
        id?:number;

    }[]
}
// ========================================== STEP# 2 =================================
const friend1 = {firstName:"Iqra", lastName:"Fatima",id: 7767};

const friend2 ={firstName:"Sana" ,lastName:"Naz", id: 2010 };

const friend3 ={firstName:"Sidra" ,lastName:"Ameen" ,id: 2244};

// ========================================== STEP# 3 =================================
 people.friends.push(friend1,friend2,friend3);

 // ======================================== STEP# 4 ==================================
 console.log(people);
