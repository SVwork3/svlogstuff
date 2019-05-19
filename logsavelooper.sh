echo "Start!"
for p in $(cat $1)
do
    node logsave.js "${p}"
done
