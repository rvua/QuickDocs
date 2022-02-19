import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
    const genderOptions = ["Male", "Female", "Do Not Disclose"]

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: null,
        gender: genderOptions[0]
    })

    const [errors, setErrors] = useState({})
    const history = useHistory();
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/records/create", form)
            .then(res => {
                console.log(res);
                history.push("/")
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })
    }

    return(
        <div>
            <div>
                <form onSubmit={onSubmitHandler} className="mx-auto w-50">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange={onChangeHandler} className="form-control" type="text" name="name" placeholder="Name"/>
                        <span className="alert-danger">{errors.name && errors.name.message}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Email:</label>
                        <input onChange={onChangeHandler} className="form-control" type="text" name="email" placeholder="Email"/>
                        <span className="alert-danger">{errors.email && errors.email.message}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input onChange={onChangeHandler} type="number" name="age" className="form-control" min={5} max={130} placeholder="5"/>
                        <span className="alert-danger">{errors.age && errors.age.message}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select onChange={onChangeHandler} name="gender" className="form-select">
                            {
                                genderOptions.map((gender, i) => {
                                    return <option key={i} value={gender}>{gender}</option>
                                })
                            }
                        </select>
                        <span className="alert-danger">{errors.gender && errors.gender.message}</span>
                    </div>
                    
                    <input type="submit" className="btn btn-success"/>
                </form>
            </div>
        </div>
    )
}

export default Create; 