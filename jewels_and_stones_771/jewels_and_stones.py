J = "z"
S = "ZZzz"


def jewels_and_stones():
    counter = 0
    for element in J:
        # if S.find(element) != -1:
        counter += S.count(element)
    return counter
print 'total: ', jewels_and_stones()
