USE [master]
GO
/****** Object:  Database [bankmanagement]    Script Date: 27-07-2021 01:41:14 ******/
CREATE DATABASE [bankmanagement]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bankmanagement', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\bankmanagement.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bankmanagement_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\bankmanagement_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [bankmanagement] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bankmanagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bankmanagement] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bankmanagement] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bankmanagement] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bankmanagement] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bankmanagement] SET ARITHABORT OFF 
GO
ALTER DATABASE [bankmanagement] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bankmanagement] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bankmanagement] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bankmanagement] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bankmanagement] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bankmanagement] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bankmanagement] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bankmanagement] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bankmanagement] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bankmanagement] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bankmanagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bankmanagement] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bankmanagement] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bankmanagement] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bankmanagement] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bankmanagement] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bankmanagement] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bankmanagement] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bankmanagement] SET  MULTI_USER 
GO
ALTER DATABASE [bankmanagement] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bankmanagement] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bankmanagement] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bankmanagement] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bankmanagement] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bankmanagement] SET QUERY_STORE = OFF
GO
USE [bankmanagement]
GO
/****** Object:  Table [dbo].[AccountTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountTypes](
	[AccountTypeId] [int] IDENTITY(1,1) NOT NULL,
	[AccountTypeName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_AccountTypes] PRIMARY KEY CLUSTERED 
(
	[AccountTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerDetail]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerDetail](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerUID] [varchar](50) NULL,
	[Name] [varchar](50) NULL,
	[UserName] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[GuardianTypeId] [int] NULL,
	[GuardianName] [varchar](100) NULL,
	[Address] [varchar](250) NULL,
	[Citizenship] [varchar](50) NULL,
	[Country] [varchar](50) NULL,
	[State] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[GenderTypeId] [int] NULL,
	[MaritalStatusId] [int] NULL,
	[ContactNo] [varchar](50) NULL,
	[DOB] [varchar](50) NULL,
	[RegistrationDate] [varchar](50) NULL,
	[AccountTypeId] [int] NULL,
	[BranchName] [varchar](50) NULL,
	[CitizenStatus] [varchar](50) NULL,
	[InitialDepositAmount] [varchar](50) NULL,
	[IdProofTypeId] [int] NULL,
	[IdentificationDocNo] [varchar](50) NULL,
	[ReferenceAccountHolderName] [varchar](150) NULL,
	[ReferenceAccountHolderAccountNo] [varchar](50) NULL,
	[ReferenceAccountHolderAddress] [varchar](250) NULL,
 CONSTRAINT [PK_CustomerDetail] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerLoanDetail]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerLoanDetail](
	[LoanId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[LoanTypeId] [int] NOT NULL,
	[LoanAmount] [varchar](50) NULL,
	[LoanApplyDate] [varchar](50) NULL,
	[LoanIssueDate] [varchar](50) NULL,
	[RateOfInterest] [varchar](50) NULL,
	[DurationOfLoan] [varchar](50) NULL,
 CONSTRAINT [PK_CustomerLoanDetail] PRIMARY KEY CLUSTERED 
(
	[LoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EducationLoanDetail]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EducationLoanDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LoanId] [int] NOT NULL,
	[CompanyName] [varchar](50) NULL,
	[Designation] [varchar](150) NULL,
	[TotalExp] [varchar](150) NULL,
	[ExpWithCompany] [varchar](150) NULL,
	[AnnualIncome] [varchar](50) NULL,
 CONSTRAINT [PK_EducationLoanDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GenderTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GenderTypes](
	[GenderTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Gender] [varchar](50) NOT NULL,
 CONSTRAINT [PK_GenderTypes] PRIMARY KEY CLUSTERED 
(
	[GenderTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GuardianTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GuardianTypes](
	[GuardianTypeId] [int] IDENTITY(1,1) NOT NULL,
	[GuardianTypeName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_GuardianTypes] PRIMARY KEY CLUSTERED 
(
	[GuardianTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IdentificationProofTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IdentificationProofTypes](
	[IdProofTypeId] [int] IDENTITY(1,1) NOT NULL,
	[IdProofType] [varchar](100) NOT NULL,
 CONSTRAINT [PK_IdentificationProofTypes] PRIMARY KEY CLUSTERED 
(
	[IdProofTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoanTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoanTypes](
	[LoanTypeId] [int] IDENTITY(1,1) NOT NULL,
	[LoanTypeType] [varchar](50) NOT NULL,
 CONSTRAINT [PK_LoanTypes] PRIMARY KEY CLUSTERED 
(
	[LoanTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MaritalStatusTypes]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaritalStatusTypes](
	[MaritalStatusId] [int] IDENTITY(1,1) NOT NULL,
	[MaritalStatus] [varchar](50) NOT NULL,
 CONSTRAINT [PK_MaritalStatus] PRIMARY KEY CLUSTERED 
(
	[MaritalStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonalLoanDetail]    Script Date: 27-07-2021 01:41:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonalLoanDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LoanId] [int] NOT NULL,
	[CourseFee] [varchar](50) NULL,
	[Course] [varchar](150) NULL,
	[FatherName] [varchar](150) NULL,
	[FatherOccupation] [varchar](150) NULL,
	[FatherExp] [varchar](50) NULL,
	[FatherExpWithCompany] [varchar](150) NULL,
	[RationCardNo] [varchar](50) NULL,
	[AnnualIncome] [varchar](50) NULL,
 CONSTRAINT [PK_PersonalLoanDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetail_AccountTypes] FOREIGN KEY([AccountTypeId])
REFERENCES [dbo].[AccountTypes] ([AccountTypeId])
GO
ALTER TABLE [dbo].[CustomerDetail] CHECK CONSTRAINT [FK_CustomerDetail_AccountTypes]
GO
ALTER TABLE [dbo].[CustomerDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetail_GenderTypes] FOREIGN KEY([GenderTypeId])
REFERENCES [dbo].[GenderTypes] ([GenderTypeId])
GO
ALTER TABLE [dbo].[CustomerDetail] CHECK CONSTRAINT [FK_CustomerDetail_GenderTypes]
GO
ALTER TABLE [dbo].[CustomerDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetail_GuardianTypes] FOREIGN KEY([GuardianTypeId])
REFERENCES [dbo].[GuardianTypes] ([GuardianTypeId])
GO
ALTER TABLE [dbo].[CustomerDetail] CHECK CONSTRAINT [FK_CustomerDetail_GuardianTypes]
GO
ALTER TABLE [dbo].[CustomerDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetail_IdentificationProofTypes] FOREIGN KEY([IdProofTypeId])
REFERENCES [dbo].[IdentificationProofTypes] ([IdProofTypeId])
GO
ALTER TABLE [dbo].[CustomerDetail] CHECK CONSTRAINT [FK_CustomerDetail_IdentificationProofTypes]
GO
ALTER TABLE [dbo].[CustomerDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetail_MaritalStatusTypes] FOREIGN KEY([MaritalStatusId])
REFERENCES [dbo].[MaritalStatusTypes] ([MaritalStatusId])
GO
ALTER TABLE [dbo].[CustomerDetail] CHECK CONSTRAINT [FK_CustomerDetail_MaritalStatusTypes]
GO
ALTER TABLE [dbo].[CustomerLoanDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerLoanDetail_CustomerDetail] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[CustomerDetail] ([CustomerId])
GO
ALTER TABLE [dbo].[CustomerLoanDetail] CHECK CONSTRAINT [FK_CustomerLoanDetail_CustomerDetail]
GO
ALTER TABLE [dbo].[CustomerLoanDetail]  WITH CHECK ADD  CONSTRAINT [FK_CustomerLoanDetail_LoanTypes] FOREIGN KEY([LoanTypeId])
REFERENCES [dbo].[LoanTypes] ([LoanTypeId])
GO
ALTER TABLE [dbo].[CustomerLoanDetail] CHECK CONSTRAINT [FK_CustomerLoanDetail_LoanTypes]
GO
ALTER TABLE [dbo].[EducationLoanDetail]  WITH CHECK ADD  CONSTRAINT [FK_EducationLoanDetail_CustomerLoanDetail] FOREIGN KEY([LoanId])
REFERENCES [dbo].[CustomerLoanDetail] ([LoanId])
GO
ALTER TABLE [dbo].[EducationLoanDetail] CHECK CONSTRAINT [FK_EducationLoanDetail_CustomerLoanDetail]
GO
ALTER TABLE [dbo].[PersonalLoanDetail]  WITH CHECK ADD  CONSTRAINT [FK_PersonalLoanDetail_CustomerLoanDetail] FOREIGN KEY([LoanId])
REFERENCES [dbo].[CustomerLoanDetail] ([LoanId])
GO
ALTER TABLE [dbo].[PersonalLoanDetail] CHECK CONSTRAINT [FK_PersonalLoanDetail_CustomerLoanDetail]
GO
USE [master]
GO
ALTER DATABASE [bankmanagement] SET  READ_WRITE 
GO
