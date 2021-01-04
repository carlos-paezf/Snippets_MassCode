#Your goal in this kata is to implement a difference function, 
#which subtracts one list from another and returns the result.
#It should remove all values from list a, which are present in 
#list b.
#If a value is present in b, all of its occurrences must be removed 
#from the other

def array_diff1(a, b):
    result = []
    for i in a:
        if i not in b:
            result.append(i) 
    return result

def array_diff2(a, b):
    return [x for x in a if x not in b]

array_diff1([1,2],[1]) == [2]
array_diff2([1,2,2,2,3],[2]) == [1,3]