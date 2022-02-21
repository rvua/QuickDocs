import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Edit = (props) => {
    const {_id} = useParams();
    
    const genderOptions = ["Male", "Female", "Do Not Disclose"]

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: null,
        gender: genderOptions[0]
    })

    const [errors, setErrors] = useState({})
    
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/records/${_id}`)
            .then(res=>{
                console.log(res.data)
                setForm(res.data.results)
            })
            .catch(err=>console.log(err))
    }, [_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost:8000/api/records/${_id}/update`, form)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })
    }

    return(
        <div>
            <div className="content">
                <form onSubmit={onSubmitHandler} className="create-form mx-auto">
                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="name">Name:</label>
                        <input onChange={onChangeHandler} value={form.name} className="form-control" type="text" name="name" placeholder="Name"/>
                        <span className="alert-danger">{errors.name && errors.name.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="type">Email:</label>
                        <input onChange={onChangeHandler} value={form.email} className="form-control" type="text" name="email" placeholder="Email"/>
                        <span className="alert-danger">{errors.email && errors.email.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="age">Age:</label>
                        <input onChange={onChangeHandler} value={form.age} type="number" name="age" className="form-control" min={5} max={130} placeholder="5"/>
                        <span className="alert-danger">{errors.age && errors.age.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="gender">Gender</label>
                        <select onChange={onChangeHandler} value={form.gender} name="gender" className="form-select">
                            {
                                genderOptions.map((gender, i) => {
                                    return <option key={i} value={gender}>{gender}</option>
                                })
                            }
                        </select>
                        <span className="alert-danger">{errors.gender && errors.gender.message}</span>
                    </div>
                    
                    <input type="submit" className="submit btn btn-success mb-3 mt-3"/>
                </form>
            </div>
        </div>
    )
}

export default Edit;