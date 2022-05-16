import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {useFormik, useField, useFormikContext} from "formik";

import * as Yup from "yup";

const schema = Yup.object({
	word: Yup.string().required("Required")
});

const print = () => {
	console.log("yes");
};

const WordInput = () => {
	const formik = useFormik({
		initialValues: {word: ""},
		onSubmit: print,
		validationSchema: schema
	});

	return (
		<Form noValidate onSubmit={formik.handleSubmit} id="mainForm">
			<Form.Group className="mb-3" controlId="TaskInput">
				<Form.Label>Word Input</Form.Label>
				<Form.Control
					type="textarea"
					placeholder="Enter word to guess"
					rows={3}
					name="word"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={!!formik.errors.hours}
				/>
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
				{formik.errors.word}
			</Form.Group>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default WordInput;
