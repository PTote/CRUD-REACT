import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    console.log(props.currentUser);


    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: props.currentUser
    });


    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, evento) => {

        console.log(data);
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data);
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
                        Edit user
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default EditUserForm;