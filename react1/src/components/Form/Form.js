import React from 'react';
import styles from './Form.module.scss'; 
import Input from '../Input/Input';
import Title from '../Title/Title';
import Button from '../Button/Button';



const Form = ({submitFn}) => (
    <div className={styles.wrapper}>
        <Title>Add new twitter account</Title>
        <form 
            className={styles.form} 
            onSubmit={submitFn}
        >
        <Input
            name='name'
            label='name'
            maxLength={30}

        />
        <Input
            name='link'
            label='Twitter Link'

        />
        <Input
            name='image'
            label='image'

        />
        <Input
            tag='textarea'
            name='description'
            label='description'
            maxLength={300}

        />
        <Button>add new item</Button>
        </form>
    </div>
);

export default Form;