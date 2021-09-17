# @jnxplus/nx-boot-gradle:application

Create a Spring Boot application.

## Usage

```bash
nx generate @jnxplus/nx-boot-gradle:application my-app-name
```

Or

```bash
nx g @jnxplus/nx-boot-gradle:app my-app-name
```

Show what will be generated without writing to disk:

```bash
nx g ... --dry-run
```

## Options

### name (_**required**_)

Type: `string`

The name of the application.

### groupId (_**required**_)

Type: `string`

The groupId of the application.

### projectVersion (_**required**_)

Type: `string`

The version of the application.

### packaging (_**required**_)

Default: `jar`

Type: `string`

Possible values: `jar`, `war`

The application packaging.

### configFormat (_**required**_)

Default: `.properties`

Type: `string`

Possible values: `.properties`, `.yml`

The configuration format used in the application.

### directory

Alias(es): dir

Type: `string`

The directory of the new application.

### tags

Type: `string`

Add tags to the application (used for linting).

## Not implemented yet Options

The following options are not implemented yet :

### frontendProject

Type: `string`

Frontend project that needs to access this application. This sets up proxy configuration.

### linter

Default: `chechstyle`

Type: `string`

Possible values: `chechstyle`, `pmd`, `none`

The tool to use for running lint checks.

### skipFormat

Default: `false`

Type: `boolean`

Skip formatting files.

### skipGradleBuild

Default: `false`

Type: `boolean`

Do not add dependencies to gradle.build.

### unitTestRunner

Default: `junit`

Type: `string`

Possible values: `junit`, `none`

Test runner to use for unit tests.