// ============================================Q#1 =============================================
// ========================================== STEP# 1 ===============================
var people = {
    friends: []
};
// ========================================== STEP# 2 =================================
var friend1 = { firstName: "Iqra", lastName: "Fatima", id: 7767 };
var friend2 = { firstName: "Sana", lastName: "Naz", id: 2010 };
var friend3 = { firstName: "Sidra", lastName: "Ameen", id: 2244 };
// ========================================== STEP# 3 =================================
people.friends.push(friend1, friend2, friend3);
// ======================================== STEP# 4 ==================================
console.log(people);
