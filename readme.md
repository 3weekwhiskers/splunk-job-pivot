# Splunk Job Pivot Chrome Extension
This extension takes a Splunk job's SID and uses it to open a new tab with the | loadjob command

"This extension was built using jplasencia/splunk-search-helper. I downloaded their code and modified as needed. Thank you jplasencia for the inspiration

Check out this [short video](https://www.youtube.com/watch?v=ymd9cmKEUzs) demo.
## Getting Started
1. Clone or download this repository 
2. Follow the instructions on [this page](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#:~:text=To%20load%20an%20unpacked%20extension,the%20bottom%20of%20the%20menu.) on how to install unpacked extensions.

## How does it work?
It finds the SID of the current job, and puts it into a URL for a new tab. NBD.

This extension DOES NOT make any external calls or transmit data to third party servers. If you are familiar with javascript, you can clearly see this in the source code. 


