
MYOLDHASH=$(node getlatesthash.js)

MYDIRECTORYHASH=$(md5sum <<< $(md5sum $1*))
node logsave.js $MYDIRECTORYHASH



echo "OLD HASH: $MYOLDHASH"
echo "NEW HASH: $MYDIRECTORYHASH"
