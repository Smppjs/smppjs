class Cstring {
    /**
     * Write a cstring in a buffer
     */
    static write({ buffer, value, offset }: { buffer: Buffer; value: string; offset: number }): Buffer {
        let newBuffer = buffer;
        let valueBuffer = Buffer.from(value, 'ascii');

        valueBuffer.copy(buffer, offset);
        newBuffer[offset + valueBuffer.length] = 0;

        return newBuffer;
    }

    /**
     * Return size of cstring
     */
    static size(value: string | number) {
        if (typeof value === 'number') {
            return value.toString().length + 1;
        }

        return value.length + 1;
    }

    /**
     * Read a cstring buffer and returns it in string
     */
    static read({ buffer, offset }: { buffer: Buffer; offset: number }) {
        let length = 0;

        while (buffer[offset + length]) {
            length++;
        }

        return buffer.toString('ascii', offset, offset + length);
    }
}

export { Cstring };
