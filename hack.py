def some(N, A, Q, Quaries):
    i = 0 
    while i <  Q:
        L = Quaries[i][0]
        R = Quaries[i][1]
        X = Quaries[i][2]
        Y = Quaries[i][3]
        split_list = A[L-1:R]
        
        split_list.sort()
        
        for k in range(X, Y):
            fsum = 
            
        ans = min(sum(split_list[:X]), sum(split_list[:Y]))
        print(ans , end=" ")
        
        ans = 0
        i += 1

T = 2
for j in range(T):
    some(5, [0,-9, 2,-9, 3], 4, [[2,4,1,3],[2,5,1,4],[2,4,1,1], [2,4,1,3]])

