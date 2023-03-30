---
title: 파이썬 코드 뭉치 - 2
author: Hve
date: 2023-01-18 14:40:00 +0900
categories: [Dev, Python]
math: false
mermaid: false
tags: [python, 암호]
---

예전에 암호 수업을 들을때 복습 겸 짜던 코드뭉치

## 암호 관련 구현 (MyMath.py)

```python
from math import *

def euclid(a, b):
    i = 2;
    r = [a, b];
    t1 = [1, 0];
    t2 = [0, 1];
    g = [];

    while r[i-1] != 0:
        r.append(r[i-2] % r[i-1]);
        g.append(int(r[i-2] / r[i-1]));
        if 2<i:
            t1.append(t1[i-3] - t1[i-2]*g[i-3]);
            t2.append(t2[i-3] - t2[i-2]*g[i-3]);
        i+=1;

    return r, g, t1, t2;

def invelement(a, b): #역원찾기
    r, g, t1, t2 = euclid(a, b);
    return t1.pop(), t2.pop();

def invele(a, b): #역원찾기
    r, g, t1, t2 = euclid(a, b);
    return t1.pop(), t2.pop();

def gcd(a, b):
    r, g, t1, t2 = euclid(a, b);
    r.pop();
    return r.pop();

def CRT():
    i = 0;

def bpow(num, b): #지수승
    bn = bin(b);
    bn = bn[2:];
    x = 1;
    for i in bn:
        x *= x;
        if i == '1':
            x *= num;
    return x;

def dtob(num):
    inv = [];
    while(num != 0):
        inv.append(num % 2);
        num = int(num / 2);
    inv.reverse();
    return inv;

def series(a, b):
    sum = 0;
    for i in range(a, b+1):
        sum += i;
    return sum;

def series(b):
    sum = 0;
    for i in range(b+1):
        sum += i;
    return sum;

def series_r(res):
    i = 0;
    sum = 0;
    while(sum < res):
        sum += i;
        i+=1;
    return res;
```

아래 코드에서 사용하는 MyMath 패키지가 이 코드다.

마지막 수정: 19.12.15


## Rabin 암호화

```python
import MyMath

def KeyCreate():
    p, q = input("Input p, q\n>>").split();
    p = int(p);
    q = int(q);
    n = p * q;
    return p, q, n;


def Encrypt(n, p):
    c = pow(p,2) % n;
    return c;

p, q, n = KeyCreate();

print("개인키: p("+str(p)+") q("+str(q)+")", end="");
print("공개키: n("+str(n) +")");
```

## RSA
```python
from MyMath import *

def encrypt(num):
    return pow(num, e) % n;


def decrypt(num):
    return pow(num, d) % n;

p, q = input('input p, q\n>>> ').split()
p = int(p);
q = int(q);
n = p * q;
phi_n = (p-1) * (q-1);

while 1:
    e = int(input('input e (1 < e < ' + str(phi_n) + ', gcd(e,'+str(phi_n)+') = 1\n>>> '));

    if (1 < e and e < phi_n) and gcd(e, phi_n) == 1:
        break;
a, b = invelement(phi_n, e);
d = b % phi_n;

print("");
print("공개키", "e:"+str(e), "ø(n):"+str(phi_n));
print("개인키", "d:"+str(d), "n:"+str(n), "p:"+str(p), "q:"+str(q));
```

마지막 수정: 19.11.26

## Knapsack

```python
from MyMath import *

def ksSum(a, x):
    s = 0;
    for i in range(0, len(a)):
        s += a[i] * x[i];
    return s;

def ksSum_inv(s, a):
    x = [0 for _ in range(len(a))]
    k = len(a) - 1;
    for i in range(k, -1, -1):
        if s >= a[i]:
            x[i] = 1
            s -= a[i];
        else:
            x[i] = 0;
    return x;

def ksPermute(a, per):
    n = [0 for _ in range(len(a))]
    for i in range(len(a)):
        n[i] = a[per[i]-1];
    return n;

b = [7, 11, 19, 39, 79, 157, 313];
n = 900;
r = 13;
per = [4, 1, 5, 3, 2, 7, 6]; #치환 
t = [];
a = [0 for _ in range(len(b))];

r_inv, tmp = invele(r, n);

for i in b:
    t.append((i * r) % n);

for i in range(len(t)):
    print(str(i) + ": " + str(per[i]-1));    
    a[i] = t[per[i]-1];
print(t);
print(a);
print("####");

print("공개키", str("a:"), a);
print("개인키", "b", b, "\nn:", n, "\nr:", r, "\nper:", per);
```

마지막 수정: 19.12.15

## ECC

```python
from MyMath import *

def addECC(x1, y1, x2, y2):
    v = (y2 - y1) / (x2 - x1);
    x3 = v**2 - x1 - x2;
    y3 = v * (x1 - x3) - y1;
    return x3, y3;

def dECC(x1, y1):
    v = (3 * (x1 ** 2) + a) / (2 * y1);
    x3 = v**2 - x1 * 2;
    y3 = v * (x1 - x3) - y1;
    return x3, y3;

def mulECC(a, b, n):
    bn = bin(n);
    bn = bn[3:];
    x = a;
    y = b;
    for i in bn:
        x, y = dECC(x, y);
        if i == '1':
            x, y = addECC(x, y, a, b);
    return x;
    
def E(p, a, b):
    x = 0;
    xl = [];
    yl = [];
    while(x < p):
        w = ((x ** 3) + a*x + b);
        if (0 <= w and w < p):
            xl.append(x);
            yl.append(sqrt(w) % p);
            xl.append(x);
            yl.append(-sqrt(w) % p);
        x += 1;

    return xl, yl;

def showE(p, a, b):
    x, y = E(p, a, b);
    for i in range(len(x)):
        print(str(x[i])+ ",", int(y[i]));
```

마지막 수정: 19.12.02