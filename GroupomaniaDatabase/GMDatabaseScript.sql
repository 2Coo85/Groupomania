﻿/*
Deployment script for C:\USERS\TCHEN\ONEDRIVE\DESKTOP\GITPROJECTS\REPOS\GROUPOMANIA\GROUPOMANIADATABASE\GROUPOMANIADATABASE\EMPLOYEES.MDF

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "C:\USERS\TCHEN\ONEDRIVE\DESKTOP\GITPROJECTS\REPOS\GROUPOMANIA\GROUPOMANIADATABASE\GROUPOMANIADATABASE\EMPLOYEES.MDF"
:setvar DefaultFilePrefix "C_\USERS\TCHEN\ONEDRIVE\DESKTOP\GITPROJECTS\REPOS\GROUPOMANIA\GROUPOMANIADATABASE\GROUPOMANIADATABASE\EMPLOYEES.MDF_"
:setvar DefaultDataPath "C:\Users\tchen\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\tchen\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(GroupomaniaMainDB)];


GO

IF (SELECT OBJECT_ID('tempdb..#tmpErrors')) IS NOT NULL DROP TABLE #tmpErrors
GO
CREATE TABLE #tmpErrors (Error int)
GO
SET XACT_ABORT ON
GO
SET TRANSACTION ISOLATION LEVEL READ COMMITTED
GO
BEGIN TRANSACTION
GO
PRINT N'Dropping [dbo].[FK_Posts_Employees]...';


GO
ALTER TABLE [dbo].[Posts] DROP CONSTRAINT [FK_Posts_Employees];


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO
PRINT N'Dropping [dbo].[FK_Employees_Departments]...';


GO
ALTER TABLE [dbo].[Employees] DROP CONSTRAINT [FK_Employees_Departments];


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO
PRINT N'Starting rebuilding table [dbo].[Employees]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [dbo].[tmp_ms_xx_Employees] (
    [EmployeeID]   INT          NOT NULL,
    [DepartmentID] INT          NOT NULL,
    [FirstName]    TEXT         NULL,
    [LastName]     TEXT         NULL,
    [Email]        TEXT         NULL,
    [PhoneNum]     NUMERIC (18) NULL,
    [UserName]     TEXT         NULL,
    PRIMARY KEY CLUSTERED ([EmployeeID] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [dbo].[Employees])
    BEGIN
        INSERT INTO [dbo].[tmp_ms_xx_Employees] ([EmployeeID], [DepartmentID], [FirstName], [LastName], [Email], [PhoneNum], [UserName])
        SELECT   [EmployeeID],
                 [DepartmentID],
                 [FirstName],
                 [LastName],
                 [Email],
                 [PhoneNum],
                 [UserName]
        FROM     [dbo].[Employees]
        ORDER BY [EmployeeID] ASC;
    END

DROP TABLE [dbo].[Employees];

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_Employees]', N'Employees';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO
PRINT N'Creating [dbo].[FK_Posts_Employees]...';


GO
ALTER TABLE [dbo].[Posts] WITH NOCHECK
    ADD CONSTRAINT [FK_Posts_Employees] FOREIGN KEY ([EmployeeID]) REFERENCES [dbo].[Employees] ([EmployeeID]);


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO
PRINT N'Creating [dbo].[FK_Employees_Departments]...';


GO
ALTER TABLE [dbo].[Employees] WITH NOCHECK
    ADD CONSTRAINT [FK_Employees_Departments] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Departments] ([DepartmentID]);


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO

IF EXISTS (SELECT * FROM #tmpErrors) ROLLBACK TRANSACTION
GO
IF @@TRANCOUNT>0 BEGIN
PRINT N'The transacted portion of the database update succeeded.'
COMMIT TRANSACTION
END
ELSE PRINT N'The transacted portion of the database update failed.'
GO
DROP TABLE #tmpErrors
GO
PRINT N'Checking existing data against newly created constraints';


GO
USE [$(GroupomaniaMainDB)];


GO
ALTER TABLE [dbo].[Posts] WITH CHECK CHECK CONSTRAINT [FK_Posts_Employees];

ALTER TABLE [dbo].[Employees] WITH CHECK CHECK CONSTRAINT [FK_Employees_Departments];


GO
PRINT N'Update complete.';


GO
