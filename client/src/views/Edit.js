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
                <h2 className="mx-auto mt-5">Edit {form.name}</h2>
                <form onSubmit={onSubmitHandler} className="create-form mx-auto mt-4">
                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="name" className="mb-2">Name:</label>
                        <input onChange={onChangeHandler} value={form.name} className="createInputs form-control" type="text" name="name" placeholder="Name"/>
                        <span className="alert-danger">{errors.name && errors.name.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3 ">
                        <label htmlFor="type" className="mb-2">Email:</label>
                        <input onChange={onChangeHandler} value={form.email} className="createInputs form-control" type="text" name="email" placeholder="Email"/>
                        <span className="alert-danger">{errors.email && errors.email.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="age" className="mb-2">Age:</label>
                        <input onChange={onChangeHandler} value={form.age} type="number" name="age" className="createInputs form-control" min={5} max={130} placeholder="5"/>
                        <span className="alert-danger">{errors.age && errors.age.message}</span>
                    </div>

                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="gender" className="mb-2">Gender:</label>
                        <select onChange={onChangeHandler} value={form.gender} name="gender" className="createInputs form-control">
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
                <p>* Click QuickDocs at the top to return to home page *</p>
            </div>
        </div>
    )
}

export default Edit;