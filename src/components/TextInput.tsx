import { useState } from 'react';

export const TextInput = () => {
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
            <input type="text" aria-label="Text Input" value={text} onChange={onChangeText} />
            <p>Entered Text: {text}</p>
        </div>
    );
};
