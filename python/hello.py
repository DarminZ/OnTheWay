# # Python 基础类型
# num = 123
# print(num, id(num), type(num), callable(num))
# x = int(input("Please enter an integer: "))
# print(x, id(x), type(x), callable(x), callable(int), callable(input))
# if (x > 10):
#     print("x is greater than 10")
# elif (x > 5):
#     print("x is greater than 5")
# else:
#     print("x is less than or equal to 5")

# float = 0.1 + 0.2 # 浮点数存在于js一样的精度问题
# print(float, type(float), callable(float))
# b = float == 0.3
# print(b, type(b), callable(b))

# s = "python"
# s[0] # s[0] 是第一个字符
# s[-1] # s[-1] 是最后一个字符
# s[2:4] # s[2:4] 是第三个到第四个字符
# s[-3:] # s[-3:] 是倒数第三个字符到倒数第一个字符
# strs = 'Python' ' \n is awesome' # 字符串连接，只能字面量，不能变量
# strs2 = s + '\n is awesome' # 字符串连接，有变量需要使用 +
# fs = f"i am {s}" # f-string 支持模板字符串
# rs = r"i am {s} \n is awesome" # 原始字符串,\n 不会被转义
# print(s, s[0], s[-1], s[2:4], s[-3:], type(s), callable(s))
# print(strs, type(strs), callable(strs))
# print(strs2, type(strs2), callable(strs2))
# print(fs, type(fs), callable(fs))
# print(rs, type(rs), callable(rs))
# print(f"{s=} {fs=} {rs=}")

# lst = [1, 2, 3]
# lst.append(4) # = lst.insert(len(lst), 4)
# lst[0] = 1.1
# lst2 = lst
# lst3 = lst[:] # 切片返回一个新的列表（浅拷贝） = lst.copy()
# lst[-2:] = [3.1, 4.1]
# lst4 = [3, 4, 5, 6, 7]
# lst5 = lst + lst4
# lst6 = lst * 2
# print(lst, len(lst), lst2, lst3, lst4, lst5, lst6, type(lst))
# print(id(lst), id(lst2), id(lst3), id(lst4), id(lst5), id(lst6))
# print(lst == lst2)
# print(lst == lst3)
# print(callable(lst), callable(lst.append), callable(len))
# for i in lst:
#     print(i)
# for i in range(len(lst)):
#     print(i, lst[i])
# rg = range(1, 3)
# for i in rg:
#     print(i, lst[i])
# pairs = [(2, 'two'), (4, 'four'), (1, 'one'), (3, 'three')]
# pairs.sort(key=lambda pair: pair[0])
# print(pairs)

# fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
# fruits.count('apple')
# 2
# fruits.count('tangerine')
# 0
# fruits.index('banana')
# 3
# fruits.index('banana', 4)  # 从 4 号位开始查找下一个 banana
# 6
# fruits.reverse()
# fruits
# ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']
# fruits.append('grape')
# fruits
# ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']
# fruits.sort()
# fruits
# ['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
# fruits.pop()
# 'pear'

# append + pop = stack
# append + remove(list[0]) = queue 但是效率低， 可以使用 collections.deque来实现队列
# from collections import deque
# queue = deque(["Eric", "John", "Michael"])
# queue.append("Terry")           # Terry 到了
# queue.append("Graham")          # Graham 到了
# queue.popleft()                 # 第一个到的现在走了
# 'Eric'
# queue.popleft()                 # 第二个到的现在走了
# 'John'
# queue                           # 按到达顺序排列的剩余队列
# deque(['Michael', 'Terry', 'Graham'])

# 列表推导式
# 例子1
# squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
# 等价于
# squares = []
# for x in range(10):
#     squares.append(x**2)
# 也等价于
# squares = list(map(lambda x: x**2, range(10)))
# 例子2
# [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
# 等价于
# combs = []
# for x in [1,2,3]:
#     for y in [3,1,4]:
#         if x != y:
#             combs.append((x, y))

# 列表是 mutable （可变的），列表元素一般为同质类型，可迭代访问。
# 元组是 immutable （不可变的），一般可包含异质元素序列，通过解包（见本节下文）或索引访问（如果是 namedtuples，可以属性访问）。
# t = 12345, 54321, 'hello!'
# print(t, t[0], type(t), callable(t))
# u = t, (1, 2, 3), [4, 5, 6]
# print(u, type(u), callable(u))

# # 集合是 mutable （可变的），无序，不重复，可迭代访问。
# st = {1, 2, 3}
# st.add(2)
# st.add(4)
# print(st, 1 in st, type(st), callable(st), callable(st.add))
# # 集合可以进行集合运算
# a = set('abracadabra')
# b = set('alacazam')
# a                                  # a 中独有的字母
# {'a', 'r', 'b', 'c', 'd'}
# a - b                              # 存在于 a 中但不存在于 b 中的字母
# {'r', 'd', 'b'}
# a | b                              # 存在于 a 或 b 中或两者中皆有的字母
# {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
# a & b                              # 同时存在于 a 和 b 中的字母
# {'a', 'c'}
# a ^ b                              # 存在于 a 或 b 中但非两者中皆有的字母
# {'r', 'd', 'b', 'm', 'z', 'l'}
# print(a, b, a - b, a | b, a & b, a ^ b)


# dct = {"name": "Bob"}
# dct["age"] = 25
# # 直接访问不存在的键会抛出 KeyError, 可以使用 get 方法访问不存在的键
# # print(dct["none"])
# # Traceback (most recent call last):
# #   File "/data/workspace/scf/scf_api/docs/code/hello.py", line 142, in <module>
# #     print(dct["none"])
# #           ~~~^^^^^^^^
# # KeyError: 'none'
# list(dct) # dict.keys()
# print(dct, dct["name"], 'none' in dct, dct.get('none'), list(dct), type(dct), callable(dct))

# # dict 构造方式 
# dict([('sape', 4139), ('guido', 4127), ('jack', 4098)]) # 键值对序列创建字典
# {'sape': 4139, 'guido': 4127, 'jack': 4098}
# dict(sape=4139, guido=4127, jack=4098) # 关键字参数创建字典
# {x: x**2 for x in (2, 4, 6)} # 字典推导式创建字典
# {2: 4, 4: 16, 6: 36}

# knights = {'gallahad': 'the pure', 'robin': 'the brave'}
# for k, v in knights.items():
#     print(k, v)

# # enumerate 函数将序列转换为索引序列
# for i, v in enumerate(['tic', 'tac', 'toe']):
#     print(i, v)

# questions = ['name', 'quest', 'favorite color']
# answers = ['lancelot', 'the holy grail', 'blue']
# # zip 函数将两个序列组合成一个元组序列
# for q, a in zip(questions, answers):
#     print(f'What is your {q}?  It is {a}.')

# basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
# # sorted 函数将序列转换为排序后的序列
# for i in sorted(basket):
#     print(i)

# basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
# # set 函数将序列转换为集合实现去重
# for f in sorted(set(basket)):
#     print(f)

# import math
# raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
# # 一般来说，在循环中修改列表的内容时，创建新列表比较简单，且安全：
# filtered_data = []
# for value in raw_data:
#     if not math.isnan(value):
#         filtered_data.append(value)
# filtered_data # [56.2, 51.7, 55.3, 52.5, 47.8]

# def func(status):
#     msg = "status is "
#     match status:
#         case 400:
#             msg += "bad request"
#         case 404:
#             msg += "not found"
#         case 500 | 501 | 502:
#             msg += "server error"
#         case _:
#             msg += "other"
#     return msg
# print(func, type(func), callable(func), func(500))
# multiply = lambda x, y: x * y # lambda 匿名函数
# print(multiply, type(multiply), callable(multiply), multiply(2, 3))

# class MyClass:
#     def __init__(self, name):
#         self.name = name
# class MyClass2:
#     def __init__(self, name):
#         self.name = name
#     def __call__(self, *args, **kwds):
#         print(self.name)
# c1 = MyClass('Bob')
# print(MyClass, type(MyClass), callable(MyClass), c1)
# print(c1, type(c1), callable(c1))
# c2 = MyClass2('Cis') 
# print(MyClass2, type(MyClass2), callable(MyClass2), c2)
# print(c2, type(c2), callable(c2), c2()) # MyClass2 中有__call__方法，所以MyClass2 的实例是可调用的
# class Point:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

# def where_is(point):
#     match point:
#         case Point(x=0, y=0):
#             print("Origin")
#         case Point(x=0, y=y):
#             print(f"Y={y}")
#         case Point(x=x, y=0):
#             print(f"X={x}")
#         case Point():
#             print("Somewhere else")
#         case _:
#             print("Not a point")
# p1 = Point(0, 0)
# print(p1, p1.x, p1.y, p1.__dict__, type(p1), callable(p1))
# where_is(p1)
# where_is(Point(0, 1))
# where_is(Point(1, 0))
# where_is(Point(1, 1))
# where_is({"x": 1, "y": 2})

# from enum import Enum
# class Color(Enum):
#     RED = 'red'
#     GREEN = 'green'
#     BLUE = 'blue'

# def print_color(color):
#     match color:
#         case Color.RED:
#             print("I see red!")
#         case Color.GREEN:
#             print("Grass is green")
#         case Color.BLUE:
#             print("I'm feeling the blues :(")

# print_color(Color.RED)
# print_color(Color.GREEN)
# print_color(Color.BLUE)

# print(list(range(3, 6)))
# args = [3, 6]
# print(list(range(*args))) # * 操作符把实参从列表或元组解包出来

# def parrot(voltage, state='a stiff', action='voom'):
#     print("-- This parrot wouldn't", action, end=' ')
#     print("if you put", voltage, "volts through it.", end=' ')
#     print("E's", state, "!")
# d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
# parrot(**d) # 字典可以用 ** 操作符传递关键字参数

# print(__file__)

# with open('/data/workspace/OnTheWay/python/text.txt', encoding="utf-8") as f:
#     read_data = f.read()
#     print(read_data)

# with open('/data/workspace/OnTheWay/python/text.txt', encoding="utf-8") as f:
#     for line in f:
#         print(line, end='')

# with open('/data/workspace/OnTheWay/python/text.txt', 'a', encoding="utf-8") as f:
#     f.write('Hello, world!')

# import json
# with open('/data/workspace/OnTheWay/python/json', 'r', encoding="utf-8") as f:
#     read_data = f.read()
#     json_data = json.loads(read_data)
#     print(f'{json_data=}', f"{json_data.get('phone')=}", type(json_data), callable(json_data))