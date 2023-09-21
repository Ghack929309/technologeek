import React from "react";

export const Form = ({
	register,
	handleSubmit,
	onSubmit,
	errors,
	isSubmitting,
	t,
}) => {
	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
				>
					{t("sections.contact.email")}
				</label>
				<input
					type="email"
					id="email"
					{...register("email", {
						required: "Enter your email",
						pattern: {
							value: /^\S+@\S+$/i,
							message: "Please enter a valid email",
						},
					})}
					placeholder="you@company.com"
					className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
						errors.email
							? "border-red-600 focus:border-red-600 ring-red-100"
							: "border-gray-300 focus:border-teal-600 ring-teal-100"
					}`}
				/>

				{errors.email && (
					<div className="mt-1 text-sm text-red-400 invalid-feedback">
						{errors.email.message}
					</div>
				)}
			</div>

			<div className="mb-4">
				<label
					htmlFor="subject"
					className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
				>
					{t("sections.contact.subject")}
				</label>
				<input
					id="subject"
					{...register("subject", {
						required: "Type a subject",
					})}
					placeholder={t("sections.contact.placeholderSubject")}
					className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
						errors.subject
							? "border-red-600 focus:border-red-600 ring-red-100"
							: "border-gray-300 focus:border-teal-600 ring-teal-100"
					}`}
				/>
				{errors.subject && (
					<div className="mt-1 text-sm text-red-400 invalid-feedback">
						{errors.subject.message}
					</div>
				)}
			</div>

			<div className="mb-4">
				<label
					htmlFor="message"
					className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
				>
					{t("sections.contact.message")}
				</label>

				<textarea
					rows="4"
					id="message"
					{...register("message", {
						required: "Enter your Message",
					})}
					placeholder={t("sections.contact.placeholderMessage")}
					className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
						errors.message
							? "border-red-600 focus:border-red-600 ring-red-100"
							: "border-gray-300 focus:border-teal-600 ring-teal-100"
					}`}
					required
				></textarea>
				{errors.message && (
					<div className="mt-1 text-sm text-red-400 invalid-feedback">
						{errors.message.message}
					</div>
				)}
			</div>
			<div className="mb-3">
				<button
					type="submit"
					className="w-full px-3 py-4 text-white bg-teal-500 rounded-md focus:bg-teal-600 focus:outline-none"
				>
					{isSubmitting ? (
						<svg
							className="w-5 h-5 mx-auto text-white animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					) : (
						t("sections.contact.buttonText")
					)}
				</button>
			</div>
		</form>
	);
};
