const withLifecycleAction = include("node/config/actions/lifecycle-action");
const appRepository = include("app/model/app-repository");
const appSchema = include("app/data-types/app-schema");
const saveAppAction = withLifecycleAction({});

saveAppAction.validate = req => appSchema.isValidate(req.body);

module.exports = saveAppAction;