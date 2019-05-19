tail -f $1 | while read -r line; do node logsave.js "$line"; done  
