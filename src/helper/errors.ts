import { HttpException, HttpStatus } from '@nestjs/common';

const noCognitoUUID = () => {
  console.log('noCognitoUUID');
  return new HttpException('NO_COGNITO_UUID', HttpStatus.UNAUTHORIZED);
};
const isUnauthorizedHttpException = () => {
  console.log('isUnauthorizedHttpException');
  return new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
};
const noUserExistsHttpException = () => {
  console.log('noUserExistsHttpException');
  return new HttpException('NO_USER_EXISTS', HttpStatus.NOT_FOUND);
};
const noMeetingExistsHttpException = () => {
  return new HttpException('NO_MEETING_EXISTS', HttpStatus.NOT_FOUND);
};
const noRoleAllowedHttpException = () => {
  console.log('noRoleAllowedHttpException');
  return new HttpException('ROLE_NOT_ALLOWED', HttpStatus.UNAUTHORIZED);
};
const noTimeAvailableHttpException = () => {
  return new HttpException('NO_TIME_AVAILABLE', HttpStatus.UNAUTHORIZED);
};
const noSequenceExistsHttpException = () => {
  return new HttpException('NO_SEQUENCE_EXISTS', HttpStatus.NOT_FOUND);
};
const noLabelExistsHttpException = () => {
  return new HttpException('NO_LABEL_EXISTS', HttpStatus.NOT_FOUND);
};
const noLabelOptionExistsHttpException = () => {
  return new HttpException('NO_LABEL_OPTION_EXISTS', HttpStatus.NOT_FOUND);
};
const noActionLogExistsHttpException = () => {
  return new HttpException('NO_ACTIONLOG_EXISTS', HttpStatus.NOT_FOUND);
};
const noOrganisationExistsHttpException = () => {
  return new HttpException('NO_ORGANISATION_EXISTS', HttpStatus.NOT_FOUND);
};
const noBucketNameExistsHttpException = () => {
  return new HttpException('NO_BUCKETNAME_EXISTS', HttpStatus.NOT_FOUND);
};
const noCodageExistsHttpException = () => {
  return new HttpException('NO_CODAGE_EXISTS', HttpStatus.NOT_FOUND);
};
const noGameExistsHttpException = () => {
  return new HttpException('NO_GAME_EXISTS', HttpStatus.NOT_FOUND);
};
const noOrganisationForUserHttpException = () => {
  return new HttpException(
    'NO_ORGANISATION_FOR_USER_EXISTS',
    HttpStatus.NOT_FOUND,
  );
};
const userAlreadyHaveOrganisation = () => {
  return new HttpException(
    'NO_ORGANISATION_FOR_USER_EXISTS',
    HttpStatus.UNAUTHORIZED,
  );
};

const userAlreadyExists = () => {
  return new HttpException('USER_ALREADY_EXISTS', HttpStatus.CONFLICT);
};

const noProGameXmlUrlException = () => {
  return new HttpException(
    'NO_XML_URL_EXISTS_FOR_THIS_PROGAME',
    HttpStatus.NO_CONTENT,
  );
};

const noProGameException = () => {
  return new HttpException('NO_PROGAME_EXIST', HttpStatus.NOT_FOUND);
};
export {
  isUnauthorizedHttpException,
  noUserExistsHttpException,
  noRoleAllowedHttpException,
  noTimeAvailableHttpException,
  noSequenceExistsHttpException,
  noLabelExistsHttpException,
  noLabelOptionExistsHttpException,
  noActionLogExistsHttpException,
  noOrganisationExistsHttpException,
  noBucketNameExistsHttpException,
  noCognitoUUID,
  noOrganisationForUserHttpException,
  userAlreadyHaveOrganisation,
  noCodageExistsHttpException,
  noGameExistsHttpException,
  noProGameXmlUrlException,
  noProGameException,
  noMeetingExistsHttpException,
  userAlreadyExists,
};
