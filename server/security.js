/* eslint-disable no-undef */
Collection.permit(['insert', 'update', 'remove']).ifLoggedIn().allowInClientCode();