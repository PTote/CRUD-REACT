import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, evento) => {

        console.log(data);
        props.addUser(data);
        evento.target.reset();

    };

    return (
        <Fragment>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>

                <div className="col-md-5">
                    <label className="form-label">Name</label>
                    <input
                        name='name'
                        type="text"
                        autoComplete='off'
                        className="form-control-sm"
                        {...register("name", {
                            // validacion
                            required: "Este campo es requerido",
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.name?.message}
                    </span>

                </div>
                <div className="col-md-5">
                    <label className="form-label">Username</label>
                    <input
                        name='username'
                        type="text"
                        autoComplete='off'
                        className="form-control-sm"
                        {...register("username", {
                            // validacion
                            required: "Este campo es requerido",
                        })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.username?.message}
                    </span>


                </div>

                <div className="col-md-5">
                    <button className="btn btn-primary" type="submit">
                        Add new user
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default AddUserForm;