USE [bankmanagement]
GO

INSERT INTO [dbo].[AccountTypes] VALUES('SALARY')
INSERT INTO [dbo].[AccountTypes] VALUES('SAVINGS')

INSERT INTO [dbo].[GenderTypes] VALUES('MALE')
INSERT INTO [dbo].[GenderTypes] VALUES('FEMALE')

INSERT INTO [dbo].[GuardianTypes] VALUES('PARENT')
INSERT INTO [dbo].[GuardianTypes] VALUES('GUARDIAN')

INSERT INTO [dbo].[LoanTypes] VALUES('EDUCATION')
INSERT INTO [dbo].[LoanTypes] VALUES('PERSONAL')

INSERT INTO [dbo].[MaritalStatusTypes] VALUES('SINGLE')
INSERT INTO [dbo].[MaritalStatusTypes] VALUES('MARRIED')

INSERT INTO [dbo].[IdentificationProofTypes] VALUES('DRIVING LICENCE')
INSERT INTO [dbo].[IdentificationProofTypes] VALUES('PAN')
INSERT INTO [dbo].[IdentificationProofTypes] VALUES('AADHAR CARD')
INSERT INTO [dbo].[IdentificationProofTypes] VALUES('PASSPORT')
INSERT INTO [dbo].[IdentificationProofTypes] VALUES('VOTER ID')
INSERT INTO [dbo].[IdentificationProofTypes] VALUES('ANY PHOTO ID CARD ISSUED BY THE CENTRAL/STATE GOVERNMENT.')