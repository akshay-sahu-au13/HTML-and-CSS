# Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1} Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} Time Complexity: O(n)


def sortArray (Arr):
    l = len(Arr)
    i = 0
    n = Arr.count(2)
    while i < l-n:
 
        if Arr[i] == 0:
            zero = Arr.pop(i)
            Arr = [zero]+Arr
            print(Arr,i)
        elif Arr[i] == 2:
            two = Arr.pop(i)
            Arr = Arr+[two]
            i -= 1
            print(Arr,i)

        j = i
        i+=1

    return Arr

Arr = list(map(int,input("Enter the array items seperated by commas").split(",")))
print(sortArray(Arr))
