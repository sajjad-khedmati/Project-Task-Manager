const mapValidationResult = (errors) => {
	const errs = {};
	if (errors.length > 0) {
		errors.map((item) => {
			errs[item.param] = item.msg;
		});
		return errs;
	} else {
		return {};
	}
};

export default mapValidationResult;
