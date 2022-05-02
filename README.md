Recruit App
=======
1.Description
--------
## Introduction

This App was created by Krzysztof Malinowski for UpTime Development.
This application is build with using React library which was started and configured initially by CRA (create-react-app). Main motivation to choose this technology was to show basic skills of using React for potentially future work.
Main purpose of this app is fetching data from free APIs and displaying it in specified section. Additionally app had to have feature of loading more data with Load Button that is placed on the bottom of app. 

#### API

API that was used in this project is https://randomuser.me
This API allows to generate data of random users with lot of data inside like name, image, birth date, country, location etc.

## Problems & solutions

During coding there were some troubles regarding fetching data which later came out to be connected with release of React 18 as new feature was at some point faulty and caused multiple fetching. It was resolved by removing <React.Strict/> component from index.js in src folder.

Fetching data from API was connected with problem that every time when request for more data was called, previous data was replaced with new random one. This was resolved by destructuring array of data each time when fetch is called and merging it with new set of data.

Due to not receiving detailed objectives regarding responsive design I have allowed myself to include for tablet and mobile resolution a little of tinkering with including dropdown menu.

2.How to Run
--------
1. Open project in VSC.
2. In terminal enter *npm -install* command
3. After installation type *npm start* and wait for dev-server to start-up 

3.LICENSE
------

MIT License

Copyright (c) [2022] [Krzysztof Malinowski]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.